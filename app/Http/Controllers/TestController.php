<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Contracts\TestContract;
use App;
use App\Http\Requests;
use App\Http\Controllers\Controller;
class TestController extends Controller
{
    private $test;
    //依赖注入
    public function __construct(TestContract $test)
    {
        $this->test=$test;
    }

    public function index(){
        $test=App::make('test');
//        $this->test->callMe('TestController');
    }


}
