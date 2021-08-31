/* eslint-disable import/no-anonymous-default-export */
// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { CogIcon as SettingsIcon } from "@sanity/icons";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(SettingsIcon)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings"].includes(listItem.getId())
      ),
    ]);
