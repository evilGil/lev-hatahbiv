export class ClassBanerInfo {
    constructor(public phone:string,
                public name:string,
                public summary:string,
                public footer:string,
                public images:string[],
                public bullets:ClassBannerBullet[]){}
}

export class ClassBannerBullet{
    constructor(public header:string,
                public data:string){}
}