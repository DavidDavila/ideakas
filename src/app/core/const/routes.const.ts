export const ROUTES = [
  {
    title: 'Proyectos',
    path: 'projects',
    icon: 'far fa-folders',
    iconSelected: 'fad fa-folders',

    loadChildren: () =>
      import('../../features/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    title: 'Mentorías',
    path: 'mentorships',
    icon: 'far fa-user-chart',
    iconSelected: 'fad fa-user-chart',
    loadChildren: () =>
      import('../../features/mentorships/mentorships.module').then(
        (m) => m.MentorshipsModule
      ),
  },
  {
    title: 'Explorar',
    icon: 'far fa-radar',
    iconSelected: 'fad fa-radar',
    path: 'explore',
    loadChildren: () =>
      import('../../features/explore/explore.module').then(
        (m) => m.ExploreModule
      ),
  },
  {
    title: 'Contactos',
    icon: 'far fa-user-friends',
    iconSelected: 'fad fa-user-friends',
    path: 'network',
    loadChildren: () =>
      import('../../features/network/network.module').then(
        (m) => m.NetworkModule
      ),
  },
  {
    title: 'Mensajes',
    icon: 'far fa-envelope',
    iconSelected: 'fad fa-envelope-open-text',
    path: 'inbox',
    loadChildren: () =>
      import('../../features/inbox/inbox.module').then((m) => m.InboxModule),
  },
];
