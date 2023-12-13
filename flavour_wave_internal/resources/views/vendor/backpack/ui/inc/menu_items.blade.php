{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" />
<x-backpack::menu-item title="Factories" icon="la la-question" :link="backpack_url('factory')" />
<x-backpack::menu-item title="Logistics" icon="la la-question" :link="backpack_url('logistic')" />
<x-backpack::menu-item title="Warehouses" icon="la la-question" :link="backpack_url('warehouse')" />