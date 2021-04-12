- Fastlane is a collection of nine open source command line tools

## Goals
- Automatic
- Store as much information in version control as possible
- Developer independent

Best guide to setting up CI iOS project with fastlane [
Setting Up Code Signing for iOS Projects
](https://circleci.com/docs/2.0/ios-codesigning/)

Links
- [Setup Fastlane](https://flutter.dev/docs/deployment/cd)
- [Flutter CircleCI Orb](https://circleci.com/developer/orbs/orb/checkmoney/flutter)

## Configuration

### Appfile

```
app_identifier "net.sunapps.1" # The bundle identifier of your app
apple_id "felix@krausefx.com"  # Your Apple email address

# You can uncomment the lines below and add your own
# team selection in case you're in multiple teams
# team_name "Felix Krause"
# team_id "Q2CBPJ58CA"

# To select a team for App Store Connect use
# itc_team_name "Company Name"
# itc_team_id "18742801"
```

Links
- [Configuring App File](https://docs.fastlane.tools/advanced/Appfile/#appfile)

### Env Variables


`FASTLANE_USER`: Your App Store Connect / Apple Developer Portal user, if your fastlane setup accesses App Store Connect or the Apple Developer Portal (e.g. submit a TestFlight build, create a profile, ...)

`FASTLANE_PASSWORD`: Your App Store Connect / Apple Developer Portal password, usually only needed if you also set the FASTLANE_USER variable
MATCH_PASSWORD: You need to provide the password of your match encryption if you use match

`FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD`: You need to provide an application specific password if you have 2-factor enabled and use pilot or deliver to upload a binary to App Store Connect

`FASTLANE_SESSION`: You need to provide a pregenerated session via fastlane spaceauth if you have 2-factor authentication enabled and want to use any actions that communicates with App Store Connect.

`LANG` and `LC_ALL`: These set up the locale your shell and all the commands you execute run at. fastlane needs these to be set to an UTF-8 locale to work correctly, for example en_US.UTF-8. Many CI systems come with a locale that is unset or set to ASCII by default, so make sure to double-check whether yours is set correctly.

## Code Signing


### Match
>Share one code signing identity across your development team to simplify your setup and prevent code signing issues. What if there was a central place where your code signing identity and profiles are kept, so anyone in the team can access them during the build process?

How to use Git for code signing:

The basic requirement is to have one code signing identity shared across your team. The easiest way to do that is to create a new Apple ID for the team (e.g. ios-dev@company.com) and use that from now on. To get started:

1. First, create a new, private Git repo in which you can store the profiles.

2. Next, create a new private key and certificate for each environment, such as “Distribution” and “Development”. Then store these private keys and certificates in your Git repo.

3. Then, create a new provisioning profiles for the various targets, such as “Development”, “App Store” and “Ad hoc” with the matching certificates and store these in your Git repo.

4. Before committing the files to Git, it is recommended to encrypt those files (e.g. using openssl).

5. Now, each of your machines can access the Git repo and install the latest certificate and provisioning profiles: - The certificates and private keys should be imported into your Keychain, either using Finder or using the 'security import' command - The provisioning profiles should be copied over to '~/Library/MobileDevice/Provisioning\ Profiles/'

6. Your Xcode project must be configured to choose the provisioning profiles automatically or define it statically. The ideal solution is to pass the UUID of the provisioning profile, via an environment variable, for each of your bundle identifiers.


Links
- [Match](https://docs.fastlane.tools/actions/match/)
- [Code Signing Guide](https://codesigning.guide/)

### 2FA

If you have 2FA setup (which all accounts are required to as of 2020) you need to setup a way to handle 2FA in CI to push to TestFlight / AppStore. [This](https://stackoverflow.com/questions/66024297/getting-error-need-to-acknowledge-to-apples-apple-id-and-privacy-statement) StackOverflow post has a good answer that should point you in the right direction based on your needs.