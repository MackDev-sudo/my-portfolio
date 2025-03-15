import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface NoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const NoteDialog = ({ isOpen, onClose }: NoteDialogProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark p-6 shadow-xl transition-all">
                <div className="flex items-start justify-between">
                  <Dialog.Title className="text-lg font-semibold text-theme-text-primary-light dark:text-theme-text-primary-dark">
                    Important Notice
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-text-primary-light dark:hover:text-theme-text-primary-dark focus:outline-none"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <p className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark leading-relaxed">
                    This website serves as a demonstration of my professional
                    work and capabilities, presented as a portfolio showcase. It
                    is important to note that I am currently not engaged in
                    freelance work or providing commercial services.
                  </p>

                  <p className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark leading-relaxed">
                    The entire codebase for this project is available on GitHub
                    at{" "}
                    <a
                      href="https://github.com/MackDev-sudo/my-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-theme-secondary-light dark:text-theme-secondary-dark hover:underline"
                    >
                      github.com/MackDev-sudo/my-portfolio
                    </a>
                    . While the code is open for reference and use, I kindly
                    request proper attribution under the MIT License terms.
                  </p>

                  <div className="mt-6 bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-theme-text-primary-light dark:text-theme-text-primary-dark mb-2">
                      MIT License Notice
                    </h4>
                    <p className="text-xs text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      Permission is hereby granted, free of charge, to any
                      person obtaining a copy of this software and associated
                      documentation files, to deal in the Software without
                      restriction, including without limitation the rights to
                      use, copy, modify, merge, publish, distribute, sublicense,
                      and/or sell copies of the Software, subject to including
                      the above copyright notice and this permission notice in
                      all copies or substantial portions of the Software.
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NoteDialog;
