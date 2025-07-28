function toggleGitHubDropdown(button) {
  const parent = button.closest('.dropdown');
  const dropdown = parent.querySelector('.github-dropdown');
  dropdown.style.display =
    dropdown.style.display === 'none' || dropdown.style.display === ''
      ? 'flex'
      : 'none';
}
