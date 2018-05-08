import { Component, OnInit } from '@angular/core';

import { ClassBanerInfo, ClassBannerBullet } from './class-banner-info'

@Component({
  selector: 'my-classes',
  templateUrl: './classes.component.html',
  styles: [`
  .classes-list{list-style:none;}`]
})
export class ClassesComponent implements OnInit {
  classBanersInfo: ClassBanerInfo[] = [new ClassBanerInfo('050-7353606',
    'בתיה שפר',
    '',
    ' יום א 10:00 - 13:00       יום ב 17:00 - 20:00    מחיר מפגש של שלוש שעות - 80 ש"ח',
    ['assets/header-logo.png'],
    [new ClassBannerBullet("פרסקו קולאז'", "עיצוב תמונות עתיקות ע\"י שבלונות תחרות ועוד, המשך ציור, תמונות תלת מימד בשני סגנונות - דקופאז' - 3 פגישות."),
    new ClassBannerBullet("צביעה בסגנון עתיק", "מסגרות חמסות וקופסאות במראה עתיק, בצביעה מיוחדת - מפגש אחד.")]),
  new ClassBanerInfo('054-5646195',
    'אסתי פודור',
    '',
    'יום ה 10:00 - 13:00       הקורס יכלול 2 פגישות של שלוש שעות כל אחת - סה"כ עלות הסדנא - 160 ש"ח',
    ['assets/header-logo.png'],
    [new ClassBannerBullet("סדנת סריגה בחוטי טריקו למתחילים", "נלמד את טכניקת הסריגה שך סלסלה ושטיח.")])];

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
