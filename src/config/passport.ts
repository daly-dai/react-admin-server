import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

import mongoose from 'mongoose'

import { secretOrKey } from './key'

const User = mongoose.model('users')

const opts = {} as {
  jwtFromRequest: any
  secretOrKey: string
}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = secretOrKey

const passport = (passport: { use: (arg0: any) => void }) => {
  passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
      const user = await User.findById(jwt_payload.id)

      return done(null, user || false)
    })
  )
}

export default passport
