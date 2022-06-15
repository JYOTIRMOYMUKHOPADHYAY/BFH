import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { commonClass } from "../commonClass/commonClass";

@Injectable({ providedIn: 'root' })
export class HeroResolver implements Resolve<any> {
  constructor(private router : Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    // console.log(route.paramMap.get('id'))
    if(route.paramMap.get('id') == "uncle_peters_pancake"){
        return commonClass.UNCLEPETERS_PANCAKE;
    }
    else if(route.paramMap.get('id') == "chainaama"){
        return commonClass.CHAINAAMA;
    }
    else if(route.paramMap.get('id') == "between_the_bread"){
        return commonClass.BETWEEN_THE_BREAD;
    }
    else if(route.paramMap.get('id') == "maggination"){
        return commonClass.MAGGINATION;
    }
    else if(route.paramMap.get('id') == "the_lassi_pub"){
        return commonClass.THE_LASSI_PUB;
    }
    else if(route.paramMap.get('id') == "sub_spot"){
        return commonClass.SUB_SPOT;
    }else{
        this.router.navigateByUrl("/")
    }
  }
}