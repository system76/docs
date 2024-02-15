{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = with pkgs; [ 
       nodejs-18_x 
       nodePackages.npm
       ];
}
