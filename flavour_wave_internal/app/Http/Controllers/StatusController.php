<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StatusController extends Controller
{
    // change status
    public function acceptOrder($id){
        $accept = $this->acceptOrderStatus();
        Preorder::where('order_id', $id)->update($accept);
        return back()->with(['message' => 'The order has been accepted.']);
    }

    public function cancelOrder($id){
        $cancel = $this->cancelOrderStatus();
        Preorder::where('order_id', $id)->update($cancel);
        return back()->with(['message' => 'The order has been cancelled.']);
    }

    // accept status
    private function acceptOrderStatus(){
        return [ 'status' => 'accepted' ];
    }

    // cancel status
    private function cancelOrderStatus(){
        return [ 'status' => 'cancelled' ];
    }
}
