FROM node:24-slim

RUN apt update && apt install -y --no-install-recommends \
    ca-certificates \
    git \
    git-lfs \
    sudo \
    libglib2.0-0 \
    libnspr4 \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libdbus-1-3 \
    libcups2 \
    libxcb1 \
    libxkbcommon0 \
    libasound2 \
    libgbm1 \
    libx11-6 \
    libxext6 \
    libcairo2 \
    libpango-1.0-0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libatspi2.0-0 \
 && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node \
 && chmod 0440 /etc/sudoers.d/node


RUN corepack enable

USER node

CMD ["/bin/bash"]