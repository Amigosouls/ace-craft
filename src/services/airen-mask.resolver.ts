import { ResolveFn , ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Inject, inject } from '@angular/core';
import { AirenMaskService } from './airen-mask.service';
import { Cards } from 'src/model/caro-img';
import { map, catchError, Observable, pipe } from 'rxjs';
import { ResolvedCardsList } from 'src/app/airen-mask/airenmask-resolve-items.modal';
import { of } from 'rxjs';


export const airenMaskResolver: ResolveFn<ResolvedCardsList[]|any> = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  return inject(AirenMaskService).getCardImages().
  pipe(map((cardList )=> new ResolvedCardsList(cardList)),
  catchError((err)=> of([new ResolvedCardsList(null,err)]))
  );
};
