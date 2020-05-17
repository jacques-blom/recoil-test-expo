# Recoil + Expo Test

1. Clone this repository
2. Run `yarn install`
3. Clone Recoil into the same parent directory that this project is in:

```
Parent Directory/
    Recoil
    recoil-test-expo
```

4. Remove `terser()` from Recoil's Rollup config
5. Run `yarn install` in the Recoil project
6. Run `yarn build` in the Recoil project
7. Run `yarn link` in the Recoil project
8. Run `yarn link recoil` in the Expo project. The Expo project will now use the locally linked Recoil library, with the help of our custom `metro.config.js`.
9. Run `yarn start` to launch the Expo app. You'll see the example working just fine. If you add back `terser()`, build and refresh, you'll get the `"s" is read-only` error.
