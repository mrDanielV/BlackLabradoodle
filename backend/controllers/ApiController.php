<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\ContentNegotiator;
use yii\filters\VerbFilter;

class ApiController extends Controller
{
    // Отключаем CSRF для API (нам нужен stateless-подход)
    public $enableCsrfValidation = false;

    private $token = 'Brier blv001';

    public function behaviors()
    {
        return [
            'contentNegotiator' => [
                'class' => ContentNegotiator::class,
                'formats' => [
                    'application/json' => Response::FORMAT_JSON,
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'home' => ['GET'],
                    'tracks' => ['GET'],
                ],
            ],
        ];
    }

    /**
     * Проверка токена Brier.
     * Если токен неверный — возвращает JSON с ошибкой и кодом 401.
     */
    private function checkAuth()
    {
        $headers = Yii::$app->request->headers;
        $token = $headers->get('Authorization');

        //\Yii::error('Token: ' . var_export($token, true), 'api');
        //\Yii::error('All headers: ' . var_export($headers->toArray(), true), 'api');

        if ($token !== $this->token) {
            Yii::$app->response->statusCode = 401;
            Yii::$app->response->data = [
                'success' => false,
                'error' => 'Unauthorized',
                //'debug_token' => $token,
            ];
            Yii::$app->response->send();
            Yii::$app->end();
        }
    }

    /**
     * Чтение файла из app/data/
     */
    private function getJSONFileContent($name = '') {
        // Проверка имени файла
        if (!$name) {
            return $this->error('File name is required');
        }

        // Получаем путь
        $file = Yii::getAlias('@app/data/' . $name);

        // Проверка существования файла
        if (!file_exists($file)) {
            return $this->error("File not found: {$name}");
        }

        // Чтение содержимого
        $content = file_get_contents($file);

        //  Проверка на пустоту
        if ($content === false || trim($content) === '') {
            return $this->error("File is empty: {$name}");
        }

        // Парсинг JSON
        $data = json_decode($content, true);

        // Проверка на ошибку JSON
        if (json_last_error() !== JSON_ERROR_NONE) {
            return $this->error("Invalid JSON in file: {$name}");
        }

        return $data;
    }

    /**
     * GET /api/home
     */
    public function actionHome()
    {
        $this->checkAuth();
        return $this->getJSONFileContent('home.json');
    }

    /**
     * GET /api/tracks
     */
    public function actionTracks()
    {
        $this->checkAuth();
        return $this->getJSONFileContent('music.json');
    }

    private function error ($msg = '') {
        //Yii::$app->response->statusCode = 404;
        return [
            'success' => false,
            'error' => $msg
        ];
    }
}