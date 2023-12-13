<?php

namespace App\Http\Controllers\Api;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

    // edit customer account
    public function editCustomer($id, Request $request){
        $data = $this->inputEditCustomerDetails($request);
        Customer::where('customer_id', $id)->update($data);
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
            'imageUrl' => $request->imageUrl,
            'password' => $request->password,
        ];
    }

    // edit customer details
    private function inputEditCustomerDetails($request){
        return [
            'name' => $request->name,
            'imageUrl' => $request->imageUrl,
        ];
    }
}
