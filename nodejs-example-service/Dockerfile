
FROM node:18.12.1-alpine3.15
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ARG PORT=8080
ENV PORT $PORT
EXPOSE $PORT

RUN mkdir -p /opt/sample/app && chown node:node /opt/sample/app
WORKDIR /opt/sample

COPY --chown=node:node package.json package-lock.json* ./

WORKDIR /opt/sample/app

COPY --chown=node:node . .

USER node

CMD ["node", "index.mjs"]
