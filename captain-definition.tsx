// FIX: Convert raw JSON object to a default export to make it a valid ES module.
// This resolves the parsing error caused by having JSON content in a .tsx file.
export default {
  "schemaVersion": 2,
  "dockerfileLines": [
                        "FROM node:8.7.0-alpine",
                        "RUN mkdir -p /usr/src/app",
                        "WORKDIR /usr/src/app",
                        "COPY ./package.json /usr/src/app/",
                        "RUN npm install && npm cache clean --force",
                        "COPY ./ /usr/src/app",
                        "ENV NODE_ENV production",
                        "ENV PORT 80",
                        "EXPOSE 80",
                        "CMD [ \"npm\", \"start\" ]"
                    ]
 };
