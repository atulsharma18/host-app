import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{ path: 'remote', loadChildren: () =>loadRemoteModule({
  remoteEntry: 'http://localhost:4202/remoteEntry.js',
  remoteName:'remoteApp2',
  exposedModule: './MicrofrontendModule'
}).then((m) => m.MicrofrontendModule).catch(err=>console.log(err)
)
},
{ path: 'shared', loadChildren: () =>loadRemoteModule({
  remoteEntry: 'http://localhost:4203/remoteEntry.js',
  remoteName:'sharedModuleApp',
  exposedModule: './SharedModule'
}).then((m) => m.SharedModule).catch(err=>console.log(err)
)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
