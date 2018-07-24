import { NgModule } from '@angular/core';

import { JhipsterNudesSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterNudesSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterNudesSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterNudesSharedCommonModule {}
