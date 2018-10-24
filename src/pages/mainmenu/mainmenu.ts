import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search'; //nrojas
import { PublicreportPage } from '../publicreport/publicreport'; //nrojas
import { PrivatereportPage } from '../privatereport/privatereport'; //nrojas
import { WastereportPage } from '../wastereport/wastereport'; //nrojas
import { CompanyreportPage } from '../companyreport/companyreport'; //nrojas
import { NewsPage } from '../news/news'; //nrojas
import { EmergencynumbersPage } from '../emergencynumbers/emergencynumbers'; //nrojas


/**
 * Generated class for the MainmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

Search = SearchPage;//nrojas
PublicR = PublicreportPage;//nrojas
PrivateR = PrivatereportPage;//nrojas
WasteR = WastereportPage;//nrojas
CompanyR = CompanyreportPage;//nrojas
NewsP = NewsPage;//nrojas
EmergencyN = EmergencynumbersPage;//nrojas

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }

  irBusqueda(){
    console.log("Abrir la pagina de busqueda");
    this.navCtrl.setRoot(this.Search)
   
    }

    goPublicReport(){ //nrojas
      console.log("Abrir la pagina de Reportes Servicios Publicos");
      this.navCtrl.setRoot(this.PublicR)
     
      }

      goPrivateReport(){ //nrojas
        console.log("Abrir la pagina de Reportes Servicios Privados");
        this.navCtrl.setRoot(this.PrivateR)
       
        }

        goWasteReport(){ //nrojas
          console.log("Abrir la pagina de Reporte de Residuos");
          this.navCtrl.setRoot(this.WasteR)
         
          }
  
          goCompanyReport(){  //nrojas
            console.log("Abrir la pagina de reporte de Compañias");
            this.navCtrl.setRoot(this.CompanyR)
           
            }

            goNews(){ //nrojas
              console.log("Abrir la pagina de Noticias");
              this.navCtrl.setRoot(this.NewsP)
             
              }

              goEmergencyNumbers(){ //nrojas
                console.log("Abrir la pagina de Numeros de Emergencia");
                this.navCtrl.setRoot(this.EmergencyN)
               
                }
}
