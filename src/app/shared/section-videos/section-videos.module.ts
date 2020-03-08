import { Component, OnInit, NgModule } from '@angular/core';
import { SectionVideosComponent } from './section-videos.component' 
import { CommonModule } from '@angular/common';
import { CardVideoModule } from './../card-video/card-video.module'


@NgModule({
    declarations: 
    [
      SectionVideosComponent
    ],
    imports:
    [
      CommonModule ,
      CardVideoModule
    ],
    exports:
    [
      SectionVideosComponent
    ]
  })
export class SectionVideosModule{}