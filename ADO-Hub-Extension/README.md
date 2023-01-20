This folder contains RazType Azure DevOps Hub Extensions

## Hub Extensions in this Repo
1. **[Raz Hub](raz-hub.html):** Basic hub for all project components, started from [getting started docs](https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops).
2. **[Raz Project Hub](./raz-proj-hub.html):** Same as #1 but for Org settings.
3. **[Raz Organization Hub](./raz-org-hub.html):** Same as #1 but for Org settings.

## Learnings
- `contributions`→`targets` specify which tab the extension will be placed in.
- if there are many targets
  - if `ms.vss-web.collection-admin-hub-group` exists, all links will redirect to the Organization Settings page,
  - else if `ms.vss-web.project-admin-hub-group` exists, all links will redirect to the Project Settings page,
  - else it will redirect to Boards, Repo, Pipeline or Test Plans, in this order of precedence.