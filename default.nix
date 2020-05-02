{ pkgs, ... }:
pkgs.mkYarnPackage {
  name = "half-earth";
  src = pkgs.gitignoreSource ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
}
