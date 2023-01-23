<div class="lynk-app">
    <header class="lynk-app__header">
        <lynk-stack horizontal justify="between" align="center">
            <img src="/assets/images/mark.svg" alt="Lynk" style="max-height: 48px; margin: 8px 0;">
            <lynk-button circle small><lynk-icon name="person"></lynk-icon></lynk-button>
        </lynk-stack>
    </header>
    <aside class="lynk-app__nav">
        <lynk-nav style="width: 76px;" squished>
            <lynk-nav-item>
                <lynk-icon slot="prefix" name="arrow-left-circle"></lynk-icon> Docs
            </lynk-nav-item>
            <lynk-nav-group heading="Layouts">
                <lynk-nav-item href="/layout/app-layout">
                    <lynk-icon slot="prefix" name="app"></lynk-icon> App
                </lynk-nav-item>
                <lynk-nav-item href="/layout/app-layout-sidebar">
                    <lynk-icon slot="prefix" name="layout-sidebar"></lynk-icon> Sidebar
                </lynk-nav-item>
                <lynk-nav-item selected href="/layout/app-layout-inset-sidebar">
                    <lynk-icon slot="prefix" name="layout-sidebar-inset-reverse"></lynk-icon> Inset Sidebar
                </lynk-nav-item>
            </lynk-nav-group>
        </lynk-nav>
    </aside>
    <div class="lynk-app__main">
    <lynk-page-layout>
        <lynk-page-sidebar slot="left-sidebar" label="Left Sidebar">
        </lynk-page-sidebar>
        <lynk-page-sidebar slot="left-inset-sidebar" label="Left Inset Sidebar" placement="left-inset">
        </lynk-page-sidebar>
        <lynk-page-header slot="header">
            <lynk-button slot="aux" size="tiny" square></lynk-button>
            <lynk-button slot="aux" size="tiny" circle></lynk-button>
            <lynk-input slot="actions" type="search" placeholder="Search" clearable>
                <lynk-icon slot="prefix" name="search"></lynk-icon>
                <lynk-button slot="suffix" size="tiny" square>
                    <lynk-icon name="arrow-return-left" label="Settings"></lynk-icon>
                </lynk-button>
            </lynk-input>
            <lynk-dropdown slot="actions" placement="bottom-start">
                <lynk-button slot="trigger">
                    <lynk-icon slot="prefix" name="filter"></lynk-icon>
                </lynk-button>
                <lynk-menu>
                    <lynk-menu-label>Source</lynk-menu-label>
                    <lynk-menu-item>Test</lynk-menu-item>
                </lynk-menu>
            </lynk-dropdown>
            <lynk-breadcrumb>
                <span slot="separator">/</span>
                <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
                <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
                <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
            </lynk-breadcrumb>
            <h1>Header Title</h1>
            <lynk-tab-group>
              <lynk-tab slot="nav" panel="general">General</lynk-tab>
              <lynk-tab slot="nav" panel="custom">Custom</lynk-tab>
              <lynk-tab slot="nav" panel="advanced">Advanced</lynk-tab>
              <lynk-tab slot="nav" panel="disabled" disabled>Disabled</lynk-tab>
            </lynk-tab-group>
        </lynk-page-header>
        <lynk-page-container>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit diam sed dolor elementum, et interdum tortor mollis. Sed rhoncus faucibus dolor, aliquam consequat quam euismod sit amet. Duis rhoncus laoreet augue et elementum. Pellentesque vel metus luctus, auctor quam at, sodales massa. Duis eget varius nisi. Quisque convallis tempor lacus, vel accumsan nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Vivamus enim odio, rhoncus non ultrices non, condimentum ut tortor. Aliquam nec nisl ligula. Phasellus nec est at mi sollicitudin bibendum. In porttitor tempus imperdiet. Donec ultricies ligula sed diam luctus iaculis. Cras non lectus volutpat, volutpat nisl nec, hendrerit lacus. Suspendisse vitae hendrerit tellus.</p>

<p>Integer aliquet tempus erat eget scelerisque. Fusce massa felis, aliquet a vestibulum vitae, ultrices eu nunc. Morbi vitae suscipit nulla, eget malesuada orci. Morbi rutrum nisl ut felis pharetra, eget venenatis turpis tempus. Nunc sollicitudin vestibulum lorem id imperdiet. Sed turpis velit, varius et mi sit amet, consequat porttitor lectus. Cras dapibus tellus id nisl aliquet, vel pretium lorem imperdiet. Proin mi mauris, viverra et urna nec, blandit mollis orci. Cras et justo ante. Aliquam mollis ut neque ac placerat. Morbi purus ipsum, sodales tempus tempor at, eleifend ut erat. Pellentesque tempor turpis dolor, a vulputate magna pellentesque et.</p>

<p>Vestibulum purus dolor, finibus in metus vel, pulvinar convallis enim. Sed gravida blandit iaculis. Curabitur pulvinar aliquet quam, sed varius lectus iaculis quis. Suspendisse tempus facilisis velit, quis consectetur orci facilisis at. Integer venenatis luctus nisl, eu euismod neque. Nullam bibendum mauris et ex efficitur, eget ullamcorper nunc tristique. Nullam sit amet tempor ex. Sed eu nunc turpis.</p>

<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent dictum tincidunt ante, eget dignissim justo viverra in. Aenean consequat leo eget nisl mattis pulvinar. Pellentesque at libero sit amet metus porta efficitur malesuada sit amet nulla. Morbi semper porta accumsan. Sed fringilla consectetur ante, ac interdum dui fermentum quis. Ut porta est dapibus, faucibus leo interdum, euismod ex. Quisque magna nulla, molestie nec est sed, bibendum auctor urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus ante, feugiat at turpis in, placerat pellentesque sem. Integer vestibulum metus id nunc iaculis, a feugiat lorem interdum. Praesent ut risus luctus, dapibus nibh sed, congue sem. Nunc sed suscipit tortor. Morbi tellus arcu, semper eget feugiat ac, ultrices eget nisi. Sed iaculis elit non metus suscipit porta.</p>

<p>Quisque mauris lectus, ultricies sit amet placerat eu, mollis in dolor. Integer porttitor, erat vel consequat tincidunt, sapien velit iaculis sem, ac euismod ex enim a lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam rutrum finibus velit, ut eleifend lorem fermentum sed. Integer nisl nisl, mollis facilisis tincidunt eu, convallis a quam. Pellentesque sagittis pretium neque ac ornare. Ut gravida, ante a posuere suscipit, enim urna vulputate elit, ac hendrerit lorem diam at nibh. Suspendisse aliquet ex nec mi mollis, nec aliquet sapien faucibus.</p>
            </lynk-page-container>
            <lynk-page-sidebar slot="right-inset-sidebar" label="Right Inset Sidebar" placement="right-inset" style="--max-width: 480px;">
            </lynk-page-sidebar>
            <lynk-page-sidebar slot="right-sidebar" label="Right Sidebar" placement="right">
            </lynk-page-sidebar>
            <lynk-page-footer slot="footer">
                <lynk-button color="primary">Save</lynk-button>
                <span slot="center">3 of 5</span>
                <lynk-button slot="secondary" square></lynk-button>
                <lynk-button slot="secondary" square></lynk-button>
                <lynk-button slot="secondary" color="danger"">Delete</lynk-button>
            </lynk-page-footer>
    </lynk-page-layout>
    </div>
</div>
