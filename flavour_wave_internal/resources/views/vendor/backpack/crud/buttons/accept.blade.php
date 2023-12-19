@if ($crud->hasAccess('update', $entry) && $entry->status == "pending")
<a href="{{ url($crud->route . '/' . $entry->getKey() . '/accept') }}"
    class="btn btn-xs btn-link fs-5 d-flex text-center"><i class="la la-check mx-1"></i>
    Accept</a>
@endif