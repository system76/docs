FROM node:24-slim
RUN apt update && apt install -y --no-install-recommends ca-certificates git git-lfs sudo \
 && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node \
 && chmod 0440 /etc/sudoers.d/node
RUN corepack enable
WORKDIR /app

USER node

CMD ["/bin/bash"]