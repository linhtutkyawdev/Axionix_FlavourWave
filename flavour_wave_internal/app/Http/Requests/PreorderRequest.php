<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PreorderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // only allow updates if the user is logged in
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'customer_id' => 'required',
            'order_id' => 'required',
            'location' => 'required',
            'order_quantity' => 'required',
            'is_urgent' => 'required',
            'capacity' => '',
            'track_number' => '',
            'driver_nrc' => '',
            'date' => '',
            'delivered_quantity' => '',
            'product_id' => 'required',
            'total_price' => 'required',
        ];
    }

    /**
     * Get the validation attributes that apply to the request.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            //
        ];
    }

    /**
     * Get the validation messages that apply to the request.
     *
     * @return array
     */
    public function messages()
    {
        return [
            //
        ];
    }
}
