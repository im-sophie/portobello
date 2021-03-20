<template>
    <div class="pb-app pb-bg-1">
        <div class="pb-flex-container-horizontal">
            <pb-hamburger-menu :classes="['pb-bg-2']" :width-expanded="100">
                <pb-hamburger-menu-item :class="['pb-bg-hi-1']" icon="table_chart" text="Tickets" />
                <pb-hamburger-menu-item :class="['pb-bg-hi-1']" icon="article" text="Wiki" />
                <pb-hamburger-menu-item :class="['pb-bg-hi-1']" icon="published_with_changes" text="CI/CD" />
                <pb-hamburger-menu-item :class="['pb-bg-hi-1']" icon="insert_chart" text="Monitoring" />
                <pb-hamburger-menu-item :class="['pb-bg-hi-1']" icon="settings" text="Settings" />
            </pb-hamburger-menu>
            
            <pb-tab-bar :classes="['pb-bg-3', 'pb-flex-item-expand']" title="Settings">
                <pb-tab-bar-item icon="account_circle" text="Profile" />
                <pb-tab-bar-item icon="group" text="Users" />
            </pb-tab-bar>
        </div>
    </div>
</template>
