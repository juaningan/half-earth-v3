{ pkgs ? import ./nix {} }:
with pkgs;
let
  shell = mkShell {
    buildInputs = [
      yarn2nix
      yarn
      nodejs
      git
    ];
    shellHook = ''
      echo "Yarn Dev Tools" \
      | ${figlet}/bin/figlet -f banner -c \
      | ${lolcat}/bin/lolcat
    '';
  };
in
shell
