import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimeService } from './anime/anime.service';
import { HttpClientModule } from '@angular/common/http';
import { AnimeComponent } from 'src/app/anime/anime.component';


@NgModule({
  declarations: [
    AnimeService,
  ],
  exports: [
    AnimeComponent,        
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})

export class CoreModule { 
  
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: CoreModule,
        providers: [
            AnimeService,
         ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
       // throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
