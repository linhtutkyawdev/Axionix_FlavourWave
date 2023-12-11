<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    // get all customers' info
    public function getAllCustomer(){
        $customers = Customer::get();
        return response()->json([
            'customers' => $customers,
        ]);
    }

    // create customer account
    public function createCustomer(Request $request){
        $data = $this->inputCustomerDetails($request);
        Customer::create($data);

        return response()->json([
            'message' => 'Your account has successfully been created'
        ]);
    }

    // delete customer account
    public function deleteCustomer($id){
        Customer::where('customer_id', $id)->first()->delete();
        return response()->json([
            'message' => 'We will miss you. Your account has been permanently deleted.'
        ]);
    }

    // input customer details
    private function inputCustomerDetails($request){
        return [
            'name' => $request->name,
            'email' => $request->email,
        ];
    }
}
