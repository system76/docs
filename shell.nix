{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = with pkgs; [ 
       nodejs_20
       pkgs.prefetch-npm-deps
       ];
}
