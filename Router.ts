//The Router provides an events observable that can be subscribed to

constructor(router:Router) {
  router.events.subscribe(event => {
    if(event instanceof NavigationStart) {
    }
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  }
});
