page('/'
  , (context, next) =>  app.Puppy.fetchAll(() => app.breederView.initIndexPage(context, next))
);
page('/puppies'
  , (context, next) =>  app.puppyView.initSearchForm(context, next)
);

// TYLER - This is a potential route for shelter puppy details; STRETCH GOAL
// page('/puppies/:puppy_id'
//   , context => app.puppyView.initPuppyDetail(context)
// );

page('/about'
  , context => app.businessView.initAboutPage(context)
);
page('/contact-us'
  , context => app.businessView.initContactPage(context)
);
page('/puppies/application'
  , context => app.applicationView.initPuppyAppForm(context)
);

// Breeder routes
page('/breeder/puppies'
  , context =>  app.Puppy.fetchAll(() => app.breederView.initWhelpingPage(context, next))
);

// TYLER - This is a potential route for breeder puppy details; STRETCH GOAL
// page('/breeder/puppies/:puppy_id'
//   , context => app.breederView.initBreederPuppyDetail(context)
// );

page('/breeder/puppies/new', context =>  app.breederView.initBreederForm(context));

page();