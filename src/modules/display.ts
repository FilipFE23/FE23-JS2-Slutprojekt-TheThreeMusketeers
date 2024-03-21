import { Users, getUsers } from "./fetch.ts";

export function applyProfilePic(userObj: Users, usernameInput: HTMLInputElement, passwordInput: HTMLInputElement): void{
  const loggedInProfilePicImgElement = document.getElementById("logged-in-profile-pic") as HTMLImageElement;

  for (const key in userObj) {
    const currentUser: Users = userObj[key];
    if (usernameInput.value === currentUser.username && passwordInput.value === currentUser.password){
      loggedInProfilePicImgElement.src = currentUser.profilepic;
      loggedInProfilePicImgElement.classList.add("circle");
    };
  };
};

export async function displayProfilePages(user: string, loggedInUser: string): Promise<void> {
  console.log('WIP');
  const profilePageImgElement = document.getElementById("profile-page-profile-picture") as HTMLImageElement;
  const profilePageH2Element = document.getElementById("profile-page-username") as HTMLHeadingElement;
  const deleteAccountButton = document.getElementById("delete-button") as HTMLButtonElement;

  const users = await getUsers();

  for (const key in users) {
    const currentUser = users[key];
    if (currentUser.username === user) {
      profilePageImgElement.src = currentUser.profilepic;
      profilePageH2Element.innerText = currentUser.username;

      profilePageImgElement.classList.add("circle");
      if (user === loggedInUser) {
        deleteAccountButton.classList.remove("hidden");
      }
    };
  };
};