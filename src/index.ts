import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortUrlService } from './shorturl.service';

export * from './shorturl.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ShortUrlModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShortUrlModule,
      providers: [ShortUrlService]
    };
  }
}
