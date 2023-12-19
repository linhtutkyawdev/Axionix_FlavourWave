{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{
                trans('backpack::base.dashboard') }}</a></li>


@switch(backpack_user()->department)
@case('ADMIN')
<x-backpack::menu-item title="Users" icon="la la-user" :link="backpack_url('user')" />
@break

@case('FACTORY')
<x-backpack::menu-item title="Users" icon="la la-user" :link="backpack_url('user')" />
<x-backpack::menu-item title="Factories" icon="la la-cog" :link="backpack_url('factory')" />
<x-backpack::menu-item title="Products" icon="la la-cog" :link="backpack_url('product')" />
<x-backpack::menu-item title="Ingredients" icon="la la-cog" :link="backpack_url('ingredient')" />
<x-backpack::menu-item title="Receipes" icon="la la-cog" :link="backpack_url('receipe')" />
<x-backpack::menu-item title="Warehouses" icon="la la-cog" :link="backpack_url('warehouse')" />
@break

@case('LOGISTIC')
<x-backpack::menu-item title="Users" icon="la la-user" :link="backpack_url('user')" />
<x-backpack::menu-item title="Drivers" icon="la la-cog" :link="backpack_url('driver')" />
<x-backpack::menu-item title="Logisics" icon="la la-cog" :link="backpack_url('logisic')" />
<x-backpack::menu-item title="Orders" icon="la la-cog" :link="backpack_url('order')" />
@break

@case('SALE')
<x-backpack::menu-item title="Users" icon="la la-user" :link="backpack_url('user')" />
<x-backpack::menu-item title="Preorders" icon="la la-cog" :link="backpack_url('preorder')" />
<x-backpack::menu-item title="Preorder details" icon="la la-cog" :link="backpack_url('preorder-detail')" />
<x-backpack::menu-item title="Products" icon="la la-cog" :link="backpack_url('product')" />
<x-backpack::menu-item title="Drivers" icon="la la-cog" :link="backpack_url('driver')" />
@break

@case('WAREHOUSE')
<x-backpack::menu-item title="Users" icon="la la-cog" :link="backpack_url('user')" />
<x-backpack::menu-item title="Warehouses" icon="la la-user" :link="backpack_url('warehouse')" />
<x-backpack::menu-item title="Drivers" icon="la la-cog" :link="backpack_url('driver')" />>
@break

@endswitch