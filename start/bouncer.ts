import Bouncer from '@ioc:Adonis/Addons/Bouncer'

export const { actions } = Bouncer

export const { policies } = Bouncer.registerPolicies({
  LessonPolicy: () => import('App/Policies/LessonPolicy'),
})
