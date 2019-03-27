<?php
/**
 * Created by PhpStorm.
 * User: wangjj
 * Date: 2019/3/27
 * Time: 下午3:13
 */
namespace App\Services;
use App\Contracts\TestContract;

class TestService implements TestContract{
    public function callMe($controller)
    {
        dd('Call me From TestServiceProvider In'.$controller);
    }
}