import { RouterModule, Routes } from "@angular/router";
import {BodyComponent} from "../pages/body/body.component";
import {TransactionHistoryComponent} from "../pages/transaction-history/transaction-history.component";
import {AddresseeFormComponent} from "../pages/addressee-form/addressee-form.component";
import {TransactionFormComponent} from "../pages/transaction-form/transaction-form.component";

const ROUTES: Routes = [
  {path:'home', component: BodyComponent },
  {path:'nuevo-destinatario', component: AddresseeFormComponent},
  {path:'nueva-transaccion', component: TransactionFormComponent},
  {path:'historial-transacciones', component: TransactionHistoryComponent },
  {path:'**', pathMatch:'full', redirectTo:'home'},
]

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
