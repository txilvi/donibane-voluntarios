import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { NgTsSpinnerModule } from 'ng-ts-spinner';

import { LimitToDirective } from './directives/limit-to.directive';
import { PassCheckDirective } from './directives/pass-check.directive';
import { NgRetina } from './directives/retina-image.directive';
import { FixedNavDirective } from './directives/fixed-nav.directive';
import { ClickStopPropagation } from './directives/stop-propagation.directive';
import { CustomMinDirective } from './directives/custom-min-validator.directive';
import { CustomMaxDirective } from './directives/custom-max-validator.directive';
import { DecimalsInputDirective } from './directives/decimals-input.directive';
import { FixedElementDirective } from './directives/fixed-element.directive';
import { TransitionPageDirective } from './directives/transition-page.directive';
import { KeyEventDirective } from './directives/key-event.directive';

import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { StartFromArrayPipe } from './pipes/start-from-array.pipe';
import { RemoveFinalSpacesPipe } from './pipes/remove-final-spaces.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { IsNotEmptyObjectPipe } from './pipes/is-not-empty-object.pipe';
import { NombreSexoPipe } from './pipes/nombre-sexo.pipe';
import { GroupByPipe } from './pipes/group-by.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';

import { BreakpointProvider } from './providers/breakpoint.provider';
import { SocialProvider } from './providers/social.provider';
import { CacheProvider } from './providers/cache.provider';


@NgModule({
  imports: [
    CommonModule,
    NgTsSpinnerModule
  ],
  declarations: [
    LimitToPipe,
    SearchPipe,
    StartFromArrayPipe,
    RemoveFinalSpacesPipe,
    SafeUrlPipe,
    NombreSexoPipe,
    EscapeHtmlPipe,
    HighlightPipe,
    CustomDatePipe,
    LimitToDirective,
    PassCheckDirective,
    FixedNavDirective,
    FixedElementDirective,
    ClickStopPropagation,
    NgRetina,
    IsNotEmptyObjectPipe,
    CustomMinDirective,
    CustomMaxDirective,
    GroupByPipe,
    DecimalsInputDirective,
    TransitionPageDirective,
    KeyEventDirective
  ],
  entryComponents: [
  ],
  exports: [
    EscapeHtmlPipe,
    TranslateModule,
    LimitToPipe,
    NombreSexoPipe,
    SearchPipe,
    StartFromArrayPipe,
    RemoveFinalSpacesPipe,
    SafeUrlPipe,
    IsNotEmptyObjectPipe,
    GroupByPipe,
    HighlightPipe,
    CustomDatePipe,
    LimitToDirective,
    PassCheckDirective,
    FixedNavDirective,
    FixedElementDirective,
    ClickStopPropagation,
    NgRetina,
    CustomMinDirective,
    CustomMaxDirective,
    DecimalsInputDirective,
    TransitionPageDirective,
    KeyEventDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LimitToPipe,
        NombreSexoPipe,
        SearchPipe,
        StartFromArrayPipe,
        RemoveFinalSpacesPipe,
        SafeUrlPipe,
        IsNotEmptyObjectPipe,
        GroupByPipe,
        HighlightPipe,
        CustomDatePipe,
        BreakpointProvider,
        SocialProvider,
        CacheProvider
      ]
    };
  }
}

