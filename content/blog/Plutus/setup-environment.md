---
title: Plutus Development Setup on macOS
description: A guide how to set up a working Plutus development environment on macOS.
createdAt: 2021-04-09
updatedAt: 2021-04-14
tags:
  - Plutus
  - Cardano
  - Blockchain
---

# Prerequisites

* macOS (11.2 Big Sur)
* Terminal

# Install Nix

## Download and Install

```sh
sh <(curl -L https://nixos.org/nix/install) --no-daemon
```

This will install Nix into the `/nix` folder.

Check it is properly installed by running

```sh
nix --version
```

## Configuration

In order to allow Nix to download binary packages for Plutus, provided by IOHK (IOG),
you'll need to add the servers from which they can be downloaded to the `/etc/nix/nix.conf` config file.

Open `/etc/nix/nix.conf` using an editor of your choice, e.g.

```sh
vim /etc/nix/nix.conf
```

and add the two lines below

```
substituters = https://hydra.iohk.io https://iohk.cachix.org https://cache.nixos.org/
trusted-public-keys = hydra.iohk.io:f/Ea+s+dFdN+3Y/G+FDgSq+a5NEWhJGzdjvKNGv0/EQ= iohk.cachix.org-1:DpRUyj7h7V830dp/i6Nti+NEO2/nhblbov/8MW7Rqoo= cache.nixos.org-1:6NCHdD59X431o0gWypbMrAURkbJ16ZPMQFGspcDShjY=
```

Note: Do not configure the sandbox feature here, it tends to break the setup.

You may need to restart your computer at this point.

## Download Plutus Code

Download the Plutus code from GitHub and build Plutus Core.

```sh
git clone https://github.com/input-output-hk/plutus.git
cd plutus/
nix build -f default.nix plutus.haskell.packages.plutus-core.components.library
```

### Troubleshooting

This should work. However, some people experienced errors complaining about a missing `/usr/lib/libSystem.B.dylib`.
In such a case, try to upgrade nixpkgs to a newer (albeit unstable) version by running

```sh
sudo nix-channel --add https://nixos.org/channels/nixpkgs-unstable unstable
```

## Build Plutus Playground

```sh
nix-build -A plutus-playground.client
nix-build -A plutus-playground.server
nix-build -A plutus-playground.generate-purescript
nix-build -A plutus-playground.start-backend
nix-build -A plutus-pab
```

Build and run playground server

```sh
nix-shell
cd plutus-pab/
plutus-pab-generate-purs

cd ../plutus-playground-server
plutus-playground-generate-purs
plutus-playground-server
```

In a new terminal start the playground client

```sh
cd plutus/
nix-shell
cd plutus-playground-client
npm run start
```

# Development Workflow

Now, whenever you want to work on Plutus projects, you need to head into the `plutus/` folder and enter the `nix-shell`

```sh
cd plutus/
nix-shell
```

For the Plutus Pioneer Program, you'd then

```sh
cd ../plutus-pioneer-program/
cabal build
```

# Resources

1️⃣ [Plutus on GitHub](https://github.com/input-output-hk/plutus)

2️⃣ [Plutus Pioneer Program on GitHub](https://github.com/input-output-hk/plutus-pioneer-program/)

3️⃣ [Plutus Community Docs](http://docs.plutus-community.com/docs/setup/MacOS.html)

4️⃣ [Plutus Pioneer Programm - Lecture #1](https://youtu.be/IEn6jUo-0vU)

5️⃣ [Plutus Setup Instructions by `lsmor`](https://github.com/lsmor/plutus-pioneer-program/blob/master/installation/instructions.md)