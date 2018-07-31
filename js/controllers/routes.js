page('/'
  , (context, next) => app.Puppy.fetchFeatured(() => app.puppyView.initIndexPage(context, next))
);
page('/puppies'
  , context => app.puppyView.initSearchForm(context)
);
page('/puppies/:puppy_id'
  , context => app.puppyView.initPuppyDetail(context)
);
page('/about'
  , context => app.businessView.initAboutPage(context)
);
page('/contact-us'
  , context => app.businessView.initContactPage(context)
);
page('/puppies/application'
  , context => app.puppyView.initPuppyAppForm(context)
);

// Breeder routes
page('/breeder/puppies'
  , context => app.breederView.initBreederPuppies(context)
);
page('/breeder/puppies/:puppy_id'
  , context => app.breederView.initBreederPuppyDetail(context)
);
page('/breeder/puppies/new', context => app.Puppy.fetchOne(context, app.breederView.initBreederForm));

page();