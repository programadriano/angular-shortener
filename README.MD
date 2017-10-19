# Angular-Shortener

## Installation

To install this library, run:

```bash
$ npm install angular-shorturl --save
```

## Consuming your library

You can import this library in any Angular application by running:

```bash
$ npm install angular-shorturl
```

and then from your Angular `AppModule`:

```typescript

import { ShorturlModule } from './modules/shorturl/shorturl.module';
import { ShortUrlService } from 'angular-shorturl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapsModule,
    HttpModule,
    ShorturlModule
  ],
  providers: [ShortUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use it in your component. We'll show you how we can display our result in console.log('');

```typescript
export class AppComponent {

  constructor(private shortUrlService: ShortUrlService) {

    this.shortUrlService.load('band.com.br/123').then((data) => {
         console.log(data);
    });
  }
}
```

## License

MIT © [Thiago da Silva Adriano](mailto:tadriano.net@outlook.com)
