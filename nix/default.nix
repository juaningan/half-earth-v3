{ sources ? import ./sources.nix,
  nixpkgs ? sources.nixpkgs }:
let
  config = {};
  overlays = [(_: pkgs: rec {
    yarn2nix-moretea = pkgs.callPackage sources.yarn2nix {};
    inherit (import sources.gitignore { inherit (pkgs) lib; }) gitignoreSource;
  })];
  pkgs = import nixpkgs { inherit overlays config; };
in
pkgs
