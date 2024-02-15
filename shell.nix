{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = with pkgs; [ 
       nodejs-18_x 
       nodePackages.npm
       ];
  shellHook =
  ''
    cd /home/aaronh/Projects/system76/docs
    npm ci
    npm start
  '';
}
