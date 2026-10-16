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
                //'debug_token' => $token,  // временно
            ];
            Yii::$app->response->send();
            Yii::$app->end();
        }
    }

    /**
     * GET /api/home
     */
    public function actionHome()
    {
        $this->checkAuth();
        $file = Yii::getAlias('@app/data/home.json');
        return json_decode(file_get_contents($file), true);
    }

    /**
     * GET /api/tracks
     */
    public function actionTracks()
    {
        $this->checkAuth();

        // Пока заглушка
        return [
            'success' => true,
            'data' => [
                ['name' => 'Lite Smile'],
                ['name' => 'Sarcasm'],
            ],
        ];
    }
}