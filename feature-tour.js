const tour = new Shepherd.Tour({
    defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'class-1 class-2',
        scrollTo: { behavior: 'smooth', block: 'center' },
      },
      useModalOverlay:true, //Pone todo enncima de un overlay oscuro

    });

    tour.addStep({
        title: 'Creating a Shepherd Tour',
        text: `Creating a Shepherd tour is easy. too!\
        Just create a \`Tour\` instance, and add as many steps as you want.`,
        attachTo: {
          element: '.first',
          on: 'left-end' 
          //Possible string values: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'
        },
        buttons: [

          {
            action() {
              return this.next();
            },
            classes: 'btn-danger',
            text: 'Next'
            
          }
        ],
        id: 'creating',
        modalOverlayOpeningRadius: 5, //le pone border radius al spotlight que tienen en el overlay
      });

      tour.addStep({
          tittle: 'Step 2', //titulo
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia error, temporibus nostrum cupiditate nemo, praesentium dolorem fugiat quasi recusandae libero est vel. Officia molestiae modi illum exercitationem iure ipsum sequi?',
          attachTo:{ //Attacheas el globo al element: '.nombre-de-class' y on: 'posición'
              element: '.second',
              on: 'bottom-start'
          },
          cancelIcon:{ //Tener el icono de la X para cerrar
              enabled: false,
          },
          buttons: [
            {
              action() {
                return this.back();
              },
              classes: 'btn-danger',
              text: 'Back'
            },
            {
              action() {
                return this.next();
              },
              classes: 'btn-danger',
              text: 'Next',

            }
          ],
      })
      
      tour.start();

