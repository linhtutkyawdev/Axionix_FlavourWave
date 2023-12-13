<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerRequest;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CustomerController extends Controller
{
    // get all customers' info
    public function show(){
        $customers = Customer::all();
        return response()->json([
            'customers' => $customers,
        ]);
    }

    // create customer account
    public function createCustomer(CustomerRequest $request){
        $cleanData = $request->validated();
        Customer::create($cleanData);
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
    public function deleteCustomer(Request $request){
        $validator = Validator::make($request->all(),[
            'customer_id' => ['required',Rule::exists('customers','customer_id')]
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()]);
        }

        Customer::where('customer_id', $validator->validate())->delete();
        return response()->json([
            'message' => 'We will miss you. Your account has been permanently deleted.'
        ]);
    }

    // input customer details
    private function inputCustomerDetails($request){
        return [
            'customer_id' => $request->customer_id,
            'name' => $request->name,
            'email' => $request->email,
            'image_url' => $request->image_url,
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
