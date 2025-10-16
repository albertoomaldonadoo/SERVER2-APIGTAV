import './style.css'
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of} from 'rxjs';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `      
      <h1>Personajes iconicos de GTAV</h1>
      <div id="mostrarPersonajes">
        
      </div>
    
      <h1>Localizaciones iconicas de GTAV</h1>
      <div id="mostrarLocalizaciones">
        
      </div>

      <h1>Vehiculos iconicos de GTAV</h1>
      <div id="mostrarVehiculos">
        
      </div>

      <h1>Armas iconicas de GTAV</h1>
      <div id="mostrarArmas">
        
      </div>
`

const respuestaPersonajes = fromFetch('http://localhost:3000/personajes').pipe(
  switchMap(respuestaPersonajesFetch => {
    if (respuestaPersonajesFetch.ok) {
      return respuestaPersonajesFetch.json();
    } else {
      return of({ error: true, message: `Error ${ respuestaPersonajesFetch.status }` });
    }
  })  
);
 
respuestaPersonajes.subscribe({
    next: (resultado:any) => {
      const element = document.getElementById('mostrarPersonajes');
      if(element){
        resultado.map((personaje:any)=>{
          element.innerHTML+=`
            <div class="card">
              <div class="data-container">
                 <h2>ID: ${personaje['id']}</h2>
              </diV>

              <div class="data-container">
                 <p>Nombre: ${personaje['nombre']}</p>
              </diV>

              <div class="image-container">
                 <img src="${personaje['img']}">
              </div>

              <div class="data-container">
                 <p>Descripcion: ${personaje['descripcion']}</p>
              </diV>
            </div>`
        })
      }
      
    },
    complete: () => console.log('done'),})




    const respuestaLocalizaciiones = fromFetch('http://localhost:3000/localizaciones').pipe(
      switchMap(respuestaLocalizacionesFetch => {
        if (respuestaLocalizacionesFetch.ok) {
          return respuestaLocalizacionesFetch.json();
        } else {
          return of({ error: true, message: `Error ${ respuestaLocalizacionesFetch.status }` });
        }
      })  
    );
     
    respuestaLocalizaciiones.subscribe({
        next: (resultado:any) => {
          const element = document.getElementById('mostrarLocalizaciones');
          if(element){
            resultado.map((localizacion:any)=>{
              element.innerHTML+=`
                <div class="card">
                  <div class="data-container">
                     <h2>ID: ${localizacion['id']}</h2>
                  </diV>
    
                  <div class="data-container">
                     <p>Nombre: ${localizacion['nombre']}</p>
                  </diV>
    
                  <div class="image-container">
                     <img src="${localizacion['img']}">
                  </div>
    
                  <div class="data-container">
                     <p>Descripcion: ${localizacion['descripcion']}</p>
                  </diV>
                </div>`
            })
          }
          
        },
        complete: () => console.log('done'),})



    const respuestaVehiculos = fromFetch('http://localhost:3000/vehiculos').pipe(
      switchMap(respuestaVehiculosFetch => {
        if (respuestaVehiculosFetch.ok) {
          return respuestaVehiculosFetch.json();
        } else {
          return of({ error: true, message: `Error ${ respuestaVehiculosFetch.status }` });
        }
      })  
    );
      
    respuestaVehiculos.subscribe({
        next: (resultado:any) => {
          const element = document.getElementById('mostrarVehiculos');
          if(element){
            resultado.map((vehiculo:any)=>{
              element.innerHTML+=`
                <div class="card">
                  <div class="data-container">
                      <h2>ID: ${vehiculo['id']}</h2>
                  </diV>
    
                  <div class="data-container">
                      <p>Nombre: ${vehiculo['nombre']}</p>
                  </diV>
    
                  <div class="image-container">
                      <img src="${vehiculo['img']}">
                  </div>
    
                  <div class="data-container">
                      <p>Descripcion: ${vehiculo['descripcion']}</p>
                  </diV>
                </div>`
            })
          }
          
        },
        complete: () => console.log('done'),})


      const respuestaArmas = fromFetch('http://localhost:3000/armas').pipe(
        switchMap(respuestaArmasFetch => {
          if (respuestaArmasFetch.ok) {
            return respuestaArmasFetch.json();
          } else {
            return of({ error: true, message: `Error ${ respuestaArmasFetch.status }` });
          }
        })  
      );
        
      respuestaArmas.subscribe({
          next: (resultado:any) => {
            const element = document.getElementById('mostrarArmas');
            if(element){
              resultado.map((arma:any)=>{
                element.innerHTML+=`
                  <div class="card">
                    <div class="data-container">
                        <h2>ID: ${arma['id']}</h2>
                    </diV>
      
                    <div class="data-container">
                        <p>Nombre: ${arma['nombre']}</p>
                    </diV>
      
                    <div class="image-container">
                        <img src="${arma['img']}">
                    </div>
      
                    <div class="data-container">
                        <p>Descripcion: ${arma['descripcion']}</p>
                    </diV>
                  </div>`
              })
            }
            
          },
          complete: () => console.log('done'),})